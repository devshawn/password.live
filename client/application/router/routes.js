import { SimplePage } from "../simple/simple.page"
import { AdvancedPage } from "../advanced/advanced.page"

export const routes = [
    { label: "Simple", path: "/", page: SimplePage },
    { label: "Advanced", path: "/advanced", page: AdvancedPage }
]
