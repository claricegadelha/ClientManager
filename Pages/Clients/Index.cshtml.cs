using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ClientManager.Data;
using ClientManager.Models;

namespace ClientManager.Pages.Clients
{
    public class IndexModel : PageModel
    {
        private readonly ClientManager.Data.ClientContext _context;

        public IndexModel(ClientManager.Data.ClientContext context)
        {
            _context = context;
        }

        public IList<Client> Client { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Client = await _context.Client.ToListAsync();
        }
    }
}
