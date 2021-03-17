import { useStore } from "./utils";

export function useSwatchIcon({ attributes }) {
  const { icon } = useStore();

  return (
    <svg
      className={icon}
      style={attributes}
      viewBox="0 0 153 139"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m192.269087 159.525943c4.48177-4.133032 8.605952-8.626502 12.730134-13.095943.667498 3.195891 1.358834 6.391781 2.050171 9.563643 6.031319-.192234 11.871923-1.60996 17.092708-4.685705.333749 2.186662.977408 6.559986 1.287317 8.770678 5.435338-1.009229 10.536928-3.075745 15.23325-6.007314 1.573388 10.092287 7.77158 18.718789 15.876909 24.605956-1.740262 7.256834-5.769087 13.624586-8.272203 20.545011.405266 2.88351 1.19196 5.718962 1.859458 8.554414 4.434091 2.57113 8.725148 5.406582 12.873169 8.458297-4.577127 1.393697-9.106575 3.003657-13.564506 4.781821 6.078996 5.16629 11.085229 11.630159 12.181832 19.872193-2.765347-.048059-5.530695-.072088-8.272203-.096117.405267 5.094201 1.025086 10.164374 1.263478 15.258575-3.122936-.768936-6.222032-1.60996-9.27345-2.523071-1.048925 1.129375-3.146775 3.364095-4.195699 4.469441 1.454191 6.463869 3.146774 12.903709 4.052664 19.487724-3.718916-3.5323-6.603459-7.809507-9.392646-12.062685-5.387659 1.513843-10.679962 3.364095-15.853069 5.526728.119196 4.49347.166874 8.986941-.166875 13.480411-2.38392-3.292008-4.076503-6.992513-5.316142-10.861222-1.239638-.865053-3.695076-2.619189-4.934715-3.484242-3.313649 2.811423-6.531941 5.694933-9.750233 8.602473-2.860705-3.147833-5.816766-6.175518-8.796666-9.179175-5.506856 3.099774-11.609691 3.86871-17.593331 1.754135-.90589-4.757792-2.09785-9.467525-3.528202-14.081142-2.956061 1.057287-5.912122 2.114574-8.844344 3.21992.953568-5.334494 2.09785-10.596901 3.075257-15.931395-3.456684.144176-6.937208.288351-10.393892.480585 3.385166-2.739335 6.746494-5.502699 9.917108-8.506355-2.908383.048058-8.725148.120146-11.633531.168205 1.573387-1.369668 4.720162-4.157061 6.26971-5.526729-.619819-1.417726-1.883297-4.229148-2.503116-5.622845-3.361327-.600731-6.698816-1.225492-10.012465-1.994428-11.752727-3.051715-23.839202.696848-35.734964-.62476 1.859458-3.147833 3.218292-6.848338 6.245871-9.083058 6.102836-3.027686 13.016204-2.475013 19.548146-1.754136 6.365067-6.175518 14.92334-8.554414 23.2909-10.548842-3.647398-1.489813-7.318635-2.931568-10.942193-4.469441 4.076503-.240292 8.176846-.456555 12.277189-.62476-.452945-3.628417-.929729-7.232805-1.454192-10.837193 1.144282-.480585 3.409006-1.465785 4.529449-1.970399-1.668744-2.426955-3.313649-4.877938-4.934715-7.352952 2.336242.384469 4.696323.792966 7.032565 1.177434 1.954814-3.676476 5.07775-7.040571 5.602212-11.26972-1.048925-3.075744-2.288563-6.079401-3.695076-9.01097 5.125428 2.306809 10.608445 3.484242 16.234497 3.844681.166874-3.700505.357588-7.40101.548301-11.101515 2.669991 3.21992 5.268464 6.511927 7.986133 9.683789z"
        transform="translate(-110 -146)"
      />
    </svg>
  );
}