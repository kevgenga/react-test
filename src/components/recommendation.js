function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (isSpring) {
        return <div>" C'est le moment de compoter ! " 🌱🎉</div>;
    }
        return <div>" Ce n'est pas le moment de compoter.. " 😒👎</div>;
}

export default Recommendation;