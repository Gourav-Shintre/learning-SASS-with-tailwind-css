import tw from "tailwind-styled-components";
export const StyledDiv = tw.div`
flex gap-2 flex-wrap ml-2
& div {
bg-red-400
}
&p {
text-blue-600
&:hover {
text-yellow-400 pointer
}
}

`;
