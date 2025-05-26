export const sendMessageToBackend = async (message: string): Promise<string> => {
    const response = await fetch('https://your-azure-function-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.output; // Assumes backend returns { output: "response text" }
};