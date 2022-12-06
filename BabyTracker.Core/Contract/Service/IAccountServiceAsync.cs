﻿using BabyTracker.Core.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Contract.Service
{
    public interface IAccountServiceAsync
    {
        Task<IdentityResult> SignUpAsync(SignUpModel model);
        Task<SignInResult> SignInAsync(LoginModel model);
    }
}
