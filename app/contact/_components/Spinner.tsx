import Image from "next/image";

export function Spinner() {
    return <Image src="/icons/spinner.svg" alt="Spinner Icon" width={30} height={30} className="spinner" />;
}
