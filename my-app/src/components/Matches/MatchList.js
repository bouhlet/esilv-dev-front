import { useState, useEffect} from "react";

function MatchList(){
    const [matchs, setMatchs] = useState();

    useEffect(() => {
        const URL =""
        fetch(URL + "matches",
        {
            headers: {
                Authorization: "Bearer " +localStorage.getItem("Token"),
            }
        }
        ).then(res => res.json()).then(data => setMatchs(data));
    }, [])

    return (<ul>
        {matchs === undefined && <span>Loading...</span>}
        {matchs?.length === 0 && <span>No data</span>}
        {matchs?.map((match) =>(
        <li>{match._id}</li>
        ))}
    </ul>);
}

export default MatchList;