export default function RandomSeedPicker() {
    const seeds = ["🍒", "🍎", "🍌" ];
    const finalSeedsArray = []
    for (let i = 0; i < 3; i++) {
        finalSeedsArray.push( seeds[Math.floor(Math.random() * 3)]);
    }
    return (
        <>
            <h1>{finalSeedsArray}</h1>
            {finalSeedsArray.every(element => element === finalSeedsArray[0]) && <h2> You win! </h2>}
        </> 
    )
}