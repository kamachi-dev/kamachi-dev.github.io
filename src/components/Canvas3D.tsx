import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";

import '../styles/components/Canvas3D.css';

export default function Canvas3D() {
    const canvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        //renderer.setSize(width, height);
        canvas.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();

        //let animationId: number;

        loader.load(
            "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
            (gltf) => {
                scene.add(gltf.scene);

                //set camera
                const camera = gltf.cameras[0] || new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
                if (gltf.cameras[0]) scene.add(camera);

                // Play Blender animations
                if (gltf.animations.length > 0) {
                    const mixer = new THREE.AnimationMixer(gltf.scene);
                    const action = mixer.clipAction(gltf.animations[0]);
                    action.play();

                    const clock = new THREE.Clock();

                    function animate() {
                        requestAnimationFrame(animate);
                        mixer.update(clock.getDelta());
                        renderer.render(scene, camera);
                    }

                    animate();
                }
            },
            undefined,
            (error) => {
                console.error(error);
            }
        );

        //window sizing

        // window.addEventListener("resize", () => {
        //     if (!canvas.current) return;
        //     const width = canvas.current.clientWidth || 600;
        //     const height = canvas.current.clientHeight || 400;

        //     const aspect = width / height;
        //     renderer.setSize(width, height);
        // });

        //cleanup strict mode

        return () => {
            renderer.dispose();
            if (renderer) {
                renderer.domElement.remove();
                renderer.dispose();
            }
        };

    }, []);

    return (
        <div className='canvas3D' ref={canvas} />
    );
}