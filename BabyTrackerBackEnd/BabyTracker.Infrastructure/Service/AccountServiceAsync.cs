using BabyTracker.Core.Contract.Repository;
using BabyTracker.Core.Contract.Service;
using BabyTracker.Core.Entity;
using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Infrastructure.Service
{
    public class AccountServiceAsync : IAccountServiceAsync
    {
        private readonly IAccountRepositoryAsync _accountRepositoryAsync;
        private readonly IParentRepositoryAsync _parentRepositoryAsync;
        public AccountServiceAsync(IAccountRepositoryAsync accountRepositoryAsync, IParentRepositoryAsync parentRepositoryAsync)
        {
            _accountRepositoryAsync = accountRepositoryAsync;
            _parentRepositoryAsync = parentRepositoryAsync;
        }

        public async Task<SignInResult>SignInAsync(LoginModel model)
        {
            return await _accountRepositoryAsync.SignIn(model);
        }


        public async Task<IdentityResult> SignUpAsync(SignUpModel model)
        {
            Parent parent = new Parent();
            parent.Name = model.FirstName + " " + model.LastName;
            parent.BabyId = 1;//default

            await _parentRepositoryAsync.InsertAsync(parent);

            return await _accountRepositoryAsync.SignUpAsync(model, parent.Id);
        }
    }
}
