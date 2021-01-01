namespace OrchardCore.Queries.Sql.Parser
{
    public class DivisionExpression : BinaryExpression
    {
        public DivisionExpression(Expression left, Expression right) : base(left, right)
        {
        }

        public override object Evaluate() => Left.EvaluateAsDecimal() / Right.EvaluateAsDecimal();
    }
}
