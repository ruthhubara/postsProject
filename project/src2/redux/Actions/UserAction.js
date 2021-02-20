
export function setUserFirstName(name) {

    return { type: "SET_FIRST_NAME", payload: name }
}

export function setUserLastName(name) {

    return { type: "SET_LAST_NAME", payload: name }
}

export function setUserPhone(phone) {

    return { type: "SET_PHONE", payload: phone }
}

export function setUserAddress(address) {

    return { type: "SET_ADDRESS", payload: address }
}