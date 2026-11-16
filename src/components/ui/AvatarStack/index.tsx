import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  size?: number;
  className?: string;
};

export function AvatarStack({
  avatars,
  size = 32,
  className = "",
}: AvatarStackProps) {
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {avatars.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="rounded-full border-2 border-cream object-cover"
          style={{ width: size, height: size }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
