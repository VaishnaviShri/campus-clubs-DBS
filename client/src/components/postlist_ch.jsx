import React from 'react'

const Postlist_ch = () => {
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">post ID </th>
                    <th scope="col">Post</th>
                    <th scope="col">edit </th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {/* (sample row just for checking )  */}
                <tr>
                    <td>1</td>
                    <td>Nkjsdnfkd(Post title)</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Postlist_ch;