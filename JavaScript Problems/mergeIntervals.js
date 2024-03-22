function merge(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]]; // Initialize the merged list with the first interval

    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMergedInterval = merged[merged.length - 1];

        // Check if the current interval overlaps with the last merged interval
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Merge the intervals by updating the end time of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If the current interval doesn't overlap, add it to the merged list
            merged.push(currentInterval);
        }
    }

    return merged;
}