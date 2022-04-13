

export default function Search() {
    const s = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let value = "";
    value = s.mov;
    return value;
}

