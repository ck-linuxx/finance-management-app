import Svg, { G, Line, Path } from "react-native-svg";

type IProps = {
  w: string;
  h: string;
}

export function DollarSign({ w, h }: IProps) {
  return (
    <Svg width={w} height={h} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="1.056" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign">
      <G id="SVGRepo_bgCarrier" stroke-width="0"/>
        <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.576"/>
        <G id="SVGRepo_iconCarrier">
        <Line x1="12" y1="1" x2="12" y2="23"/>
      <Path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </G>
    </Svg>
  )
}