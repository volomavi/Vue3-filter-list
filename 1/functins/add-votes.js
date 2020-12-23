/*

mutation AddVote($id: Text!){
    update_votes_by_pk(ok_columns: {id: $id}, _inc: {votes: 1}) {
        id
        votes
    }
}

*/

// hasura utility, creates a hasura request 
// const {hasuraRequest} = require

// exports.handler = async () => {
//     const { id } = JSON.parse(event.body);
// }
/*
const data = await hasuraRequest({
    query: ` 
        query WishlistVotes {
            id
            votes
        }
    }`,
    variables: {}
});

return {
    statusCode: 200,
    body: JSON.stringify(data),
};

*/