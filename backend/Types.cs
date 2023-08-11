using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Runtime.Serialization;

namespace MyBank.API.Types
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum AccountType
    {
        [EnumMember(Value = "Saving")]
        Saving,
        [EnumMember(Value = "Salary")]
        Salary,
        [EnumMember(Value = "Fixed Deposit")]
        FixedDeposit,
        [EnumMember(Value = "Recurring Deposit")]
        RecurringDeposit,
    }

    public class UserInfo
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string UserName { get; set; } = null!;
    }
}
