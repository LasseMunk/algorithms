import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const ThreeStarterExample = () => {
	const Box = (props: JSX.IntrinsicElements["mesh"]) => {
		// This reference will give us direct access to the THREE.Mesh object
		const ref = useRef<THREE.Mesh>(null!);
		// Hold state for hovered and clicked events
		const [hovered, hover] = useState(false);
		const [clicked, click] = useState(false);
		// Rotate mesh every frame, this is outside of React without overhead
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		useFrame(() => (ref.current.rotation.x += 0.01));

		return (
			<mesh {...props} ref={ref} scale={clicked ? 1.5 : 1} onClick={() => click(!clicked)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
			</mesh>
		);
	};

	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	);
};
