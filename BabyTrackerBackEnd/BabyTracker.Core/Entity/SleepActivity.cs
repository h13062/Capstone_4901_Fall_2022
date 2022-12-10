using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Entity
{
    public class SleepActivity
    {
        public int Id { get; set; }
        public DateTime Day { get; set; }
        public DateTime SleepStart { get; set; }
        public DateTime SleepEnd { get; set; }
        public TimeSpan SleepDuration { get; set; }

        public SleepActivity()
        {
            SleepDuration = SleepEnd - SleepStart;
            Day = DateTime.Now;
        }
    }
}
