using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class EatActivityRespondModel
    {
        public int Id { get; set; }
        public DateTime Day { get; set; }
        public DateTime EatStart { get; set; }
        public DateTime EatEnd { get; set; }
    }
}
