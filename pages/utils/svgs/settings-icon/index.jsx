import { useStore } from "./utils";

export function useSettiingsIcon() {
  const { icon } = useStore();

  return (
    <svg
      className={icon}
      viewBox="0 0 233 233"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <filter id="a" height="121.1%" width="121.1%" x="-10.6%" y="-10.6%">
        <feOffset dx={-2} dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <g
        fill="none"
        filter="url(#a)"
        strokeWidth={10}
        transform="translate(17 17)"
      >
        <path d="m108.786667 0c6.276791 0 11.575166 4.701375 12.321416 10.945l1.981709 15.5551667c3.963416 1.2852083 7.777583 2.8689166 11.401041 4.7179583l12.38775-9.626625c5.033042-3.8887917 12.097542-3.4410417 16.458959 1.0530417l13.059375 13.059375c4.452625 4.3199583 4.900375 11.39275 1.011583 16.4092083l-9.626625 12.3960417c1.857333 3.6234583 3.441042 7.437625 4.717958 11.39275l15.588334 1.9817083c6.210458.7545417 10.911833 6.0529167 10.911833 12.3297083v18.5733337c0 6.276791-4.701375 11.575166-10.945 12.321416l-15.555167 1.981709c-1.285208 3.955125-2.868916 7.769291-4.717958 11.39275l9.626625 12.38775c3.897083 5.02475 3.441042 12.097541-1.053042 16.458958l-13.059375 13.059375c-4.319958 4.452625-11.401041 4.908667-16.409208 1.011583l-12.396042-9.626625c-3.623458 1.857334-7.437625 3.441042-11.39275 4.717959l-1.981708 15.588333c-.754542 6.21875-6.052917 10.920125-12.329708 10.920125h-18.5733337c-6.2767916 0-11.5751666-4.701375-12.3214166-10.945l-1.9817084-15.555167c-3.955125-1.285208-7.7692916-2.868916-11.39275-4.717958l-12.38775 9.626625c-5.02475 3.888792-12.0975416 3.441042-16.4589583-1.04475l-13.059375-13.059375c-4.452625-4.319958-4.900375-11.39275-1.0115833-16.409208l9.626625-12.396042c-1.8573334-3.623458-3.4410417-7.437625-4.7179584-11.39275l-15.5883333-1.981708c-6.21875-.762834-10.920125-6.061209-10.920125-12.338v-18.5733337c0-6.2767916 4.701375-11.5751666 10.945-12.3214166l15.5551667-1.9817084c1.2852083-3.955125 2.8689166-7.7692916 4.7179583-11.39275l-9.6183333-12.38775c-3.8970834-5.02475-3.4410417-12.1058333 1.0530416-16.46725l13.059375-13.059375c4.3199584-4.452625 11.4010417-4.8920833 16.4092084-1.0115833l12.38775 9.6349167c3.6234583-1.8490417 7.437625-3.43275 11.4010416-4.7179584l1.9817084-15.5883333c.74625-6.21875 6.044625-10.920125 12.3214166-10.920125zm-9.286667 58c-22.8831 0-41.5 18.6169-41.5 41.5s18.6169 41.5 41.5 41.5 41.5-18.6169 41.5-41.5-18.6169-41.5-41.5-41.5z" />
      </g>
    </svg>
  );
}