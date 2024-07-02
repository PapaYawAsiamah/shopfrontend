"use client"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";


export default function LoginPage() {
  return (
    <div className="w-full min-h-screen grid grid-cols-3"  >
    <div className="gradient h-full overflow-hidden sm:block sm:col-span-1 hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 700"
            className=" h-full"
        >
            <defs>
                <linearGradient
                    id="gggrain-gradient2"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                    gradientTransform="rotate(-298 .5 .5)"
                >
                    <stop offset="0%" stopColor="hsl(194, 83%, 49%)"></stop>
                    <stop
                        offset="100%"
                        stopColor="rgba(255,255,255,0)"
                        stopOpacity="0"
                    ></stop>
                </linearGradient>
                <linearGradient
                    id="gggrain-gradient3"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                    gradientTransform="rotate(298 .5 .5)"
                >
                    <stop stopColor="hsl(227, 100%, 50%)"></stop>
                    <stop
                        offset="100%"
                        stopColor="rgba(255,255,255,0)"
                        stopOpacity="0"
                    ></stop>
                </linearGradient>
                <filter
                    id="gggrain-filter"
                    width="140%"
                    height="140%"
                    x="-20%"
                    y="-20%"
                    colorInterpolationFilters="sRGB"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                >
                    <feTurbulence
                        x="0%"
                        y="0%"
                        baseFrequency="0.72"
                        numOctaves="2"
                        result="turbulence"
                        seed="195"
                        stitchTiles="stitch"
                        type="fractalNoise"
                    ></feTurbulence>
                    <feColorMatrix
                        x="0%"
                        y="0%"
                        in="turbulence"
                        result="colormatrix"
                        type="saturate"
                        values="0"
                    ></feColorMatrix>
                    <feComponentTransfer
                        x="0%"
                        y="0%"
                        in="colormatrix"
                        result="componentTransfer"
                    >
                        <feFuncR slope="3" type="linear"></feFuncR>
                        <feFuncG slope="3" type="linear"></feFuncG>
                        <feFuncB slope="3" type="linear"></feFuncB>
                    </feComponentTransfer>
                    <feColorMatrix
                        x="0%"
                        y="0%"
                        in="componentTransfer"
                        result="colormatrix2"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -11"
                    ></feColorMatrix>
                </filter>
            </defs>
            <rect width="100%" height="100%" fill="hsl(0, 100%, 60%)"></rect>
            <rect width="100%" height="100%" fill="url(#gggrain-gradient3)"></rect>
            <rect width="100%" height="100%" fill="url(#gggrain-gradient2)"></rect>
            <rect
                width="100%"
                height="100%"
                fill="transparent"
                filter="url(#gggrain-filter)"
                style={{ mixBlendMode: "normal" }}
            ></rect>
        </svg>
    </div>
    <div className="form h-full flex items-center justify-center col-span-3 sm:col-span-2">
        <form method="post" className="">
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-1"> Welcome Back </h1>
                <p className="text-sm font-medium">Enter your email and password to access
                    your account </p>
            </div>

            <div className="mt-4 flex flex-col gap-6">
                <Input onChange={(e) => { console.log(e.target.value) }} label="Email" variant="faded" color="default" size="md" placeholder="Enter your email" type="email" />
                <Input onChange={(e) => { console.log(e.target.value) }}
                    label="Password" variant="faded" color="default" size="md" placeholder="Enter your password here" type="password" />
                <Button onClick={(e) => { console.log(e.target.value) }} variant="solid" color="primary" size="lg" className="mt-2 w-full">Login</Button>
            </div>

            <p className="mt-4">Don't have an account?<Link href="/signup">Create one</Link> </p>
        </form>
    </div>
</div>
  );
}
