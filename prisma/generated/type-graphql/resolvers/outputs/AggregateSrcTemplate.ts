import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SrcTemplateAvgAggregate } from "../outputs/SrcTemplateAvgAggregate";
import { SrcTemplateCountAggregate } from "../outputs/SrcTemplateCountAggregate";
import { SrcTemplateMaxAggregate } from "../outputs/SrcTemplateMaxAggregate";
import { SrcTemplateMinAggregate } from "../outputs/SrcTemplateMinAggregate";
import { SrcTemplateSumAggregate } from "../outputs/SrcTemplateSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSrcTemplate {
  @TypeGraphQL.Field(_type => SrcTemplateCountAggregate, {
    nullable: true
  })
  count!: SrcTemplateCountAggregate | null;

  @TypeGraphQL.Field(_type => SrcTemplateAvgAggregate, {
    nullable: true
  })
  avg!: SrcTemplateAvgAggregate | null;

  @TypeGraphQL.Field(_type => SrcTemplateSumAggregate, {
    nullable: true
  })
  sum!: SrcTemplateSumAggregate | null;

  @TypeGraphQL.Field(_type => SrcTemplateMinAggregate, {
    nullable: true
  })
  min!: SrcTemplateMinAggregate | null;

  @TypeGraphQL.Field(_type => SrcTemplateMaxAggregate, {
    nullable: true
  })
  max!: SrcTemplateMaxAggregate | null;
}
