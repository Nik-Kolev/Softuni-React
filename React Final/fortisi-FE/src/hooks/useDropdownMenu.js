import { useState } from "react";

export const DropdownMenu = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const showDropdown = () => {
        setIsDropdownVisible(true)
    }

    const hideDropdown = () => {
        setIsDropdownVisible(false)
    }

    return {
        showDropdown,
        hideDropdown,
        isDropdownVisible
    }
}