import './HeroLightEffect.css'

const rays = [
  { angle: -38, width: 1.5, height: 900, opacity: 0.22, color: 'blue', duration: 18, delay: 0 },
  { angle: -32, width: 2, height: 1100, opacity: 0.16, color: 'purple', duration: 15, delay: -4 },
  { angle: -44, width: 1, height: 750, opacity: 0.20, color: 'blue', duration: 20, delay: -8 },
  { angle: -26, width: 2.5, height: 1000, opacity: 0.12, color: 'purple', duration: 16, delay: -2 },
  { angle: -50, width: 1.2, height: 850, opacity: 0.18, color: 'blue', duration: 22, delay: -6 },
  { angle: -35, width: 1.8, height: 950, opacity: 0.14, color: 'purple', duration: 17, delay: -10 },
  { angle: -42, width: 1, height: 700, opacity: 0.20, color: 'blue', duration: 19, delay: -3 },
  { angle: -29, width: 2.2, height: 1050, opacity: 0.10, color: 'purple', duration: 21, delay: -7 },
]

export default function HeroLightEffect() {
  return (
    <div className="hero-light-rays">
      {rays.map((ray, i) => (
        <span
          key={i}
          className={`ray ray--${ray.color}`}
          style={{
            '--ray-angle': `${ray.angle}deg`,
            '--ray-width': `${ray.width}px`,
            '--ray-height': `${ray.height}px`,
            '--ray-opacity': ray.opacity,
            '--ray-duration': `${ray.duration}s`,
            '--ray-delay': `${ray.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
