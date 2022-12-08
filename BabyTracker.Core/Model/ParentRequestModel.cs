using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class ParentRequestModel
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Column(TypeName = "varchar")]
        [MaxLength(50)]
<<<<<<< HEAD
        public string LastName { get; set; }        
=======
        public string LastName { get; set; }
>>>>>>> parent of 05aec0f (add email columb to parent tabe)
        public int BabyId { get; set; }
    }
}
