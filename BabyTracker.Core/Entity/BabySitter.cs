using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Entity
{
    public class BabySitter
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string BabySitterName { get; set; }
        public int BabyId { get; set; }
        public Baby Baby { get; set; }
    }
}
