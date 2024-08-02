export const formatTime= (time)=> {
    // Parse the time string into a Date object
    const messageTime = new Date(time);

    // Get the current time
    const currentTime = new Date();

    // Calculate the difference in milliseconds between the current time and the message time
    const differenceMs = currentTime - messageTime;

    // Convert milliseconds to seconds, minutes, hours, and days
    const differenceSeconds = Math.floor(differenceMs / 1000);
    const differenceMinutes = Math.floor(differenceSeconds / 60);
    const differenceHours = Math.floor(differenceMinutes / 60);
    const differenceDays = Math.floor(differenceHours / 24);

    // Format the time based on the difference
    if (differenceSeconds < 60) {
        return `${differenceSeconds}s`;
    } else if (differenceMinutes < 60) {
        return `${differenceMinutes}m`;
    } else if (differenceHours < 24) {
        return `${differenceHours}h`;
    } else {
        return `${differenceDays}d`;
    }
}