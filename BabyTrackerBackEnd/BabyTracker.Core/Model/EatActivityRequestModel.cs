using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class EatActivityRequestModel
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string EatStart { get; set; }
        public string EatEnd { get; set; }
    }
}
