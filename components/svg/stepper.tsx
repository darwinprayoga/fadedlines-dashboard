export function Stepper(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 189 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="33"
        y="33"
        width="32"
        height="32"
        rx="16"
        transform="rotate(180 33 33)"
        stroke="#676767"
        stroke-width="2"
      />
      <path
        d="M19 25L11 17L19 9"
        stroke="#676767"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="47" cy="17" r="6" fill="#42FF00" />
      <circle cx="66" cy="17" r="6" fill="#212121" />
      <circle cx="85" cy="17" r="6" fill="#212121" />
      <circle cx="104" cy="17" r="6" fill="#212121" />
      <circle cx="123" cy="17" r="6" fill="#212121" />
      <circle cx="142" cy="17" r="6" fill="#212121" />
      <rect
        x="156"
        y="1"
        width="32"
        height="32"
        rx="16"
        stroke="#676767"
        stroke-width="2"
      />
      <path
        d="M170 9L178 17L170 25"
        stroke="#676767"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
