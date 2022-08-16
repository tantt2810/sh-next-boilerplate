import { useQuery } from "react-query";

/**
 * This component is generated as an example for useQuery hook
 *
 * To learn more about React Query and data fetching,
 * please visit https://react-query.tanstack.com/
 */

const API_URL = "https://random-data-api.com/api/users/random_user";

export const ReactQueryExample = () => {
    const { data, refetch } = useQuery(
        "repoData",
        () => fetch(API_URL).then((res) => res.json()),
        {
            refetchOnWindowFocus: false,
        },
    );

    const handleClick = () => {
        // manually refetch
        refetch();
    };

    if (data) {
        return (
            <div>
                <header>
                    <h2>React Query Data Fetching Example</h2>
                </header>
                <main>
                    <p>Programmer Jokes {`#${data.id}`}</p>
                    <p>{data.first_name}</p>
                    <p>{data.password}</p>
                    <p>
                        <button onClick={handleClick}>Give me another</button>
                    </p>
                </main>
                <footer>
                    <a
                        href="https://react-query.tanstack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go To Documentation
                    </a>
                </footer>
            </div>
        );
    }
    return null;
};
