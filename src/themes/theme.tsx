import { extendTheme } from "@chakra-ui/react";
import { TextTheme as Text } from "./components/TextTheme";
const theme = extendTheme({
    colors: {
        NightOwbg: '#011627',
        textC: '#727591',
    },
    components: {
        Text
    }
})
export default theme;