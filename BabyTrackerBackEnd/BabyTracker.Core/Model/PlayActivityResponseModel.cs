using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class PlayActivityResponseModel
    {
        public int Id { get; set; }
        public DateTime Day { get; set; }
        public DateTime PlayStart { get; set; }
        public DateTime PlayEnd { get; set; }
    }
}