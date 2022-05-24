const getUsers = async (page) => {
  const url = 'https://gorest.co.in/public/v1/users?page=' + page;
  const token =
    'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const renderUsers = async (page = 1) => {
  const users = await getUsers(page);

  console.log(users.data);
  let html = '';

  users.data.forEach((user) => {
    let htmlSegment = `<tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.gender}</td>
      <td>${user.status}</td>
      </tr>`;

    html += htmlSegment;
  });

  let container = document.querySelector('.table-data');
  container.innerHTML = html;

  renderPagination(users.meta.pagination);
};

const renderPagination = async (paginationData) => {
  let html = '';

  console.log(paginationData);

  html += `<li class="page-item ${paginationData.page === 1 ? 'disabled' : ''}">
          <span class="page-link" tabindex="-1" onclick="renderUsers(1)">First</span>
          </li>`;

  html += `<li class="page-item ${
    paginationData.links.previous === null ? 'disabled' : ''
  }">
      <span class="page-link" tabindex="-1" onclick="renderUsers(${
        paginationData.page - 1
      })">Previous</span>
      </li>`;

  if (paginationData.page - 20 > 0) {
    html += `
          <li class="page-item"><span class="page-link" onclick="renderUsers(${
            paginationData.page - 20
          })">${paginationData.page - 20}</span></li>`;
  }
  if (paginationData.page - 10 > 0) {
    html += `
          <li class="page-item"><span class="page-link" onclick="renderUsers(${
            paginationData.page - 10
          })">${paginationData.page - 10}</span></li>`;
  }

  if (paginationData.page - 5 > 0) {
    html += `
      <li class="page-item"><span class="page-link" onclick="renderUsers(${
        paginationData.page - 5
      })">${paginationData.page - 5}</span></li>`;
  }

  html += `
      <li class="page-item active"><span class="page-link">${paginationData.page}</span></li>`;

  if (paginationData.page + 5 < paginationData.pages) {
    html += `
          <li class="page-item"><span class="page-link" onclick="renderUsers(${
            paginationData.page + 5
          })">${paginationData.page + 5}</span></li>`;
  }

  if (paginationData.page + 10 < paginationData.pages) {
    html += `
          <li class="page-item"><span class="page-link" onclick="renderUsers(${
            paginationData.page + 10
          })">${paginationData.page + 10}</span></li>`;
  }

  if (paginationData.page + 20 < paginationData.pages) {
    html += `
          <li class="page-item"><span class="page-link" onclick="renderUsers(${
            paginationData.page + 20
          })">${paginationData.page + 20}</span></li>`;
  }

  html += `<li class="page-item ${
    paginationData.page === paginationData.pages ? 'disabled' : ''
  }">
              <span class="page-link" onclick="renderUsers(${
                paginationData.page + 1
              })">Next</span>
            </li>`;

  html += `<li class="page-item ${
    paginationData.page === paginationData.pages ? 'disabled' : ''
  }">
          <span class="page-link" tabindex="-1" onclick="renderUsers(${
            paginationData.pages
          })">Last</span>
          </li>`;

  let container = document.querySelector('.paginateSection');
  container.innerHTML = html;
};

renderUsers();
