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
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IParentRepositoryAsync _parentRepositoryAsync;
        public AccountRepositoryAsync(BabyTrackerDbContext db,UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IParentRepositoryAsync parentRepositoryAsync) : base(db)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _parentRepositoryAsync = parentRepositoryAsync;
        }

        public async Task<SignInResult> SignIn(LoginModel login)
        {
            return await _signInManager.PasswordSignInAsync(login.UserName, login.Password, false, false);
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel model, int parentId)
        {
            ApplicationUser user = new ApplicationUser();

            user.FirstName = model.FirstName;
            user.LastName =  model.LastName;
            user.Email = model.EmailId;
            user.UserName = model.EmailId;
            user.ParentId = parentId;

            return await _userManager.CreateAsync(user,model.Password);
        }
    }
}
