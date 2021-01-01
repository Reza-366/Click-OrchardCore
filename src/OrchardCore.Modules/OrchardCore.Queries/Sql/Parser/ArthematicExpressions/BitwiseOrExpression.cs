namespace OrchardCore.Queries.Sql.Parser.LogicalExpressions
{
    public class BitwiseOrExpression : BinaryExpression
    {
        public BitwiseOrExpression(Expression left, Expression right) : base(left, right)
        {
        }

        public override object Evaluate() => Left.EvaluateAsInteger() | Right.EvaluateAsInteger();
    }
}
