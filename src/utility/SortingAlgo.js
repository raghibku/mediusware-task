const customSort = (a, b) => {
    const statusOrder = { active: 1, completed: 2 };
    const statusA = statusOrder[a.status] || Number.MAX_SAFE_INTEGER; // default to a high value if status not found
    const statusB = statusOrder[b.status] || Number.MAX_SAFE_INTEGER;

    return statusA - statusB;
};

export {customSort}