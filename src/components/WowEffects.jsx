import { useEffect, useRef, useState } from 'react';
import ElectricBorder from './ElectricBorder';

export function Reveal({ children, className = '' }) {
  const ref = useRef(null); const [visible, setVisible] = useState(false);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: .12 }); io.observe(node); return () => io.disconnect(); }, []);
  return <div ref={ref} className={`wow-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

export function Magnetic({ children, className = '', strength = 0.16, ...props }) {
  const ref = useRef(null);
  const move = e => { const r = ref.current.getBoundingClientRect(); const x = (e.clientX - (r.left + r.width / 2)) * strength; const y = (e.clientY - (r.top + r.height / 2)) * strength; ref.current.style.transform = `translate(${x}px, ${y}px)`; };
  const leave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };
  return <div ref={ref} className={`magnetic-wrap ${className}`} onMouseMove={move} onMouseLeave={leave} {...props}>{children}</div>;
}

export function ClickSpark({ children, className = '' }) {
  const [sparks, setSparks] = useState([]);
  const click = e => { const r = e.currentTarget.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top; const id = Date.now(); setSparks(s => [...s, { id, x, y }]); setTimeout(() => setSparks(s => s.filter(v => v.id !== id)), 650); };
  return <div className={`click-spark-wrap ${className}`} onClick={click}>{children}{sparks.map(s => <span key={s.id} className="click-spark" style={{ left: s.x, top: s.y }}><i>✦</i><i>✧</i><i>·</i></span>)}</div>;
}

export function GlareHover({ children, className = '' }) { return <div className={`glare-hover ${className}`}>{children}</div>; }
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);
  const move = e => { const r = ref.current.getBoundingClientRect(); ref.current.style.setProperty('--spot-x', `${e.clientX-r.left}px`); ref.current.style.setProperty('--spot-y', `${e.clientY-r.top}px`); };
  return <div ref={ref} className={`spotlight-card ${className}`} onMouseMove={move}>{children}</div>;
}
export function ShinyText({ children, className = '' }) { return <span className={`shiny-text ${className}`}>{children}</span>; }
export function Aurora({ children }) { return <div className="aurora-wrap"><div className="pastel-aurora aurora-one"/><div className="pastel-aurora aurora-two"/><div className="pastel-aurora aurora-three"/>{children}</div>; }
export function ElectricCard({ children, color, className = '' }) { return <ElectricBorder color={color} speed={.8} chaos={.055} borderRadius={22} className={className}>{children}</ElectricBorder>; }
export function PastelPill({ children, tone = 'lavender' }) { return <span className={`pastel-pill pastel-pill-${tone}`}>{children}</span>; }
