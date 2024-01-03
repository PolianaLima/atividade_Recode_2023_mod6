using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgenciaApi.Models
{
    [Table("voos")]
    public class Voos
    {
        [Key]
        public int Id { get; set; }
        public int NumeroVoo { get; set; }
        public decimal Preco { get; set; }
        public int Desconto { get; set; }
        public String Empresa { get; set; }
        public string Origem { get; set; }
        public string Destino { get; set; }
        public DateTime DataPartida { get; set; }
        public TimeSpan Duracao { get; set; }
    }
}
