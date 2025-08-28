import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";

import './Canvas3D.css';

export default function Canvas3D() {
    const canvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        // Set initial size
        const width = canvas.current.clientWidth || 600;
        const height = canvas.current.clientHeight || 400;
        renderer.setSize(width, height);
        canvas.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();

        let animationId: number | null = null;
        let mixer: THREE.AnimationMixer | null = null;
        let camera: THREE.Camera | null = null;
        let clock: THREE.Clock | null = null;

        loader.load(
            // Replace this path with your Blender-exported GLTF/GLB file path
            "/models/your_blender_scene.glb",
            (gltf) => {
                scene.add(gltf.scene);

                // Set camera
                camera = gltf.cameras && gltf.cameras[0]
                    ? gltf.cameras[0]
                    : new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
                if (gltf.cameras && gltf.cameras[0]) scene.add(camera);

                // Play Blender animations
                if (gltf.animations.length > 0) {
                    mixer = new THREE.AnimationMixer(gltf.scene);
                    const action = mixer.clipAction(gltf.animations[0]);
                    action.play();

                    clock = new THREE.Clock();

                    function animate() {
                        animationId = requestAnimationFrame(animate);
                        if (mixer && clock && camera) {
                            mixer.update(clock.getDelta());
                            renderer.render(scene, camera);
                        }
                    }

                    animate();
                } else if (camera) {
                    // Render static scene if no animation
                    renderer.render(scene, camera);
                }
            },
            undefined,
            (error) => {
                console.error(error);
            }
        );

        // Window resizing
        function handleResize() {
            if (!canvas.current || !camera) return;
            const width = canvas.current.clientWidth || 600;
            const height = canvas.current.clientHeight || 400;
            renderer.setSize(width, height);
            if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
                (camera as THREE.PerspectiveCamera).aspect = width / height;
                (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
            }
        }

        window.addEventListener("resize", handleResize);

        // Cleanup strict mode
        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
            }
            renderer.domElement.remove();
            renderer.dispose();
        };

    }, []);

    return (
        <div className='canvas3D' ref={canvas} />
    );
}