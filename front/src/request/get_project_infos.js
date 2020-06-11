/**
 * Todo request en db pour faire le call à la db
 * @returns {Promise<{projects: [{name: string, description: string}, {name: string, description: string}, {name: string, description: string}]}>}
 */

const getProjectInfo = async () => {
    return {
        projects: [
            {name: 'Intranet POC', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tellus ac est pretium dictum. Curabitur ante nulla, efficitur in vestibulum eu, molestie mi.'},
            {name: 'Hexapod', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tellus ac est pretium dictum. Curabitur ante nulla, efficitur in vestibulum eu, molestie mi.'},
            {name: 'Whitecomet', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tellus ac est pretium dictum. Curabitur ante nulla, efficitur in vestibulum eu, molestie mi.'}
        ]
    }
}

export default getProjectInfo;