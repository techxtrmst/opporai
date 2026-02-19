import Image from "next/image"

export function OpporaLogo({ size = "default" }: { size?: "default" | "small" | "large" }) {
  const imgSize = {
    small: 100,
    default: 140,
    large: 180,
  }

  return (
    <span className="flex items-center" aria-label="Oppora.ai logo" role="img">
      <Image
        src="/images/oppora-logo.png"
        alt="Oppora.ai"
        width={imgSize[size]}
        height={imgSize[size]}
        className="object-contain"
        style={{ width: imgSize[size], height: "auto" }}
        priority
      />
    </span>
  )
}
