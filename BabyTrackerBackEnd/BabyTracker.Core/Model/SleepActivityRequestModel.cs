using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class SleepActivityRequestModel
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string SleepStart { get; set; }
        public string SleepEnd { get; set; }
    }
}