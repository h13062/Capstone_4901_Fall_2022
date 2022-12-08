using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Entity
{
    public class Parent
    {
        public int Id { get; set; }

        [MaxLength(50)]
        [Column(TypeName = "varchar")]
<<<<<<< HEAD
        public string Name { get; set; }
        
=======
        public string ParentName { get; set; }
>>>>>>> parent of 05aec0f (add email columb to parent tabe)
        public int BabyId { get; set; }
        public Baby Baby { get; set; }

    }
}
