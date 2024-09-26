export function Back(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="33.5"
        y="33"
        width="32"
        height="32"
        rx="16"
        transform="rotate(180 33.5 33)"
        stroke="#676767"
        stroke-width="2"
      />
      <path
        d="M19.5 25L11.5 17L19.5 9"
        stroke="#676767"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
