import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreePointsWave = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const SEPARATION = 100,
		AMOUNTX = 50,
		AMOUNTY = 50;

	let container: HTMLDivElement, camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

	let particles: THREE.Points,
		count = 0;
	const speed = 0.01;

	// const pointColor = 0xff6363;
	const pointColor = 0xffdddd;
	const backgroundColor = 0xf3f4f6;

	let width = 1632;
	let height = 911;

	const init = () => {
		container = document.createElement("div");

		camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
		camera.position.z = 1000;

		scene = new THREE.Scene();

		const numParticles = AMOUNTX * AMOUNTY;

		const positions = new Float32Array(numParticles * 3);
		const scales = new Float32Array(numParticles);

		let i = 0,
			j = 0;

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
				positions[i + 1] = 0; // y
				positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

				scales[j] = 1;

				i += 3;
				j++;
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

		const vertexShader = `
        attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 300.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}
        `;

		const fragmentShader = `
        uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

			}`;

		const material = new THREE.ShaderMaterial({
			uniforms: {
				color: { value: new THREE.Color(pointColor) },
			},
			vertexShader,
			fragmentShader,
		});

		//

		particles = new THREE.Points(geometry, material);
		scene.add(particles);

		//

		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);

		renderer.setSize(width, height);
		renderer.setClearColor(backgroundColor);
		renderer.setAnimationLoop(animate);
		containerRef.current?.appendChild(renderer.domElement);

		// stats = new Stats();
		// container.appendChild(stats.dom);

		container.style.touchAction = "none";
		// container.addEventListener("pointermove", onPointerMove);

		window.addEventListener("resize", onWindowResize);
	};

	const kill = () => {
		window.removeEventListener("resize", onWindowResize);
		// container.removeEventListener("pointermove", onPointerMove);
		renderer.domElement.remove();
	};

	useEffect(() => {
		init();

		return () => {
			kill();
		};
	});

	const onWindowResize = () => {
		// Ensure the container is in the DOM before accessing its dimensions
		width = container.clientWidth; // Subtract padding to get actual content width
		height = container.clientHeight; // Adjust height similarly if needed
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
	};

	// const onPointerMove = (event: { isPrimary: boolean; clientX: number; clientY: number }) => {
	// 	if (event.isPrimary === false) return;

	// 	mouseX = event.clientX - windowHalfX;
	// 	mouseY = event.clientY - windowHalfY;
	// };

	const animate = () => {
		render();
	};

	const render = () => {
		camera.position.x = 75;
		camera.position.y = 250;
		camera.lookAt(scene.position);

		const positions = particles.geometry.attributes.position.array;
		const scales = particles.geometry.attributes.scale.array;

		let i = 0,
			j = 0;

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				positions[i + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;

				scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;

				i += 3;
				j++;
			}
		}

		particles.geometry.attributes.position.needsUpdate = true;
		particles.geometry.attributes.scale.needsUpdate = true;

		renderer.render(scene, camera);

		count += speed;
	};

	return <div id='threePointsWaveRef' ref={containerRef} style={{ width: "100%", height: "100%", overflow: "hidden" }} />;
};
