const getRolesProperty = async () => {
    return {
        roles: [
            {name: 'Résident', color: '#e74c3c'},
            {name: 'Président', color: '#3498db'},
            {name: 'Responsable', color: '#2ecc71'},
            {name: 'Software', color: '#f39c12'},
    //        {name: 'Hardware', color: '#95a5a6'},
    //        {name: 'Ancien', color: '#8e44ad'}
        ]
    };
};

export default getRolesProperty;