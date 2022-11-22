using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Entity;
using BabyTracker.Core.Model;
using BabyTracker.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Repository
{
    public class AccountRepositoryAsync : BaseRepository<SignUpModel>, IAccountRepositoryAsync
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public AccountRepositoryAsync(BabyTrackerDbContext db,UserManager<ApplicationUser> userManager) : base(db)
        {
            _userManager = userManager;
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel model)
        {
            ApplicationUser user = new ApplicationUser();
            user.FirstName = model.FirstName;
            user.LastName =  model.LastName;
            user.Email = model.EmailId;
            user.UserName = model.EmailId;
           return await _userManager.CreateAsync(user,model.Password);
        }
    }
}
