import { useState } from "react";

export const DropdownMenu = () => {
    const [isVisible, setIsVisible] = useState(false)

    const showDropdown = () => {
        setIsVisible(true)
    }

    const hideDropdown = () => {
        setIsVisible(false)
    }

    return {
        showDropdown,
        hideDropdown,
        isVisible
    }
}